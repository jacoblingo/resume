import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import { extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      // Strip /resume base path if present
      let filePath = req.url.replace(/^\/resume/, "") || "/index.html";
      if (filePath === "/") filePath = "/index.html";

      const fullPath = join(distDir, filePath);
      if (!existsSync(fullPath)) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      const ext = extname(fullPath);
      const mime = mimeTypes[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": mime });
      res.end(readFileSync(fullPath));
    });

    server.listen(0, () => {
      resolve(server);
    });
  });
}

async function generatePDF() {
  const server = await startServer();
  const port = server.address().port;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`http://localhost:${port}/resume/`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: join(distDir, "Jacob_Lingo_Resume.pdf"),
    format: "Letter",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  server.close();
  console.log("PDF generated: dist/Jacob_Lingo_Resume.pdf");
}

generatePDF();
