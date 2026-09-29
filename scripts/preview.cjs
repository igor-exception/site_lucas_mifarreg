// Local-only preview, also mounted under /site_lucas_mifarreg/ for Pages checks.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const prefix = '/site_lucas_mifarreg';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain; charset=utf-8' };
http.createServer((req, res) => {
 try {
  let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (pathname === prefix) { res.writeHead(302, { Location: prefix + '/' }); res.end(); return; }
  if (pathname.startsWith(prefix + '/')) pathname = pathname.slice(prefix.length);
  if (pathname.endsWith('/')) pathname += 'index.html';
  // Expose only public site material; source PDFs and project notes stay private.
  if (!/^\/(index\.html|en\/index\.html|es\/index\.html|LICENSE\.txt|assets\/[\w./-]+|images\/[\w.-]+)$/.test(pathname)) {
   res.writeHead(404); res.end('Not found'); return;
  }
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
   res.writeHead(err ? 404 : 200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
   res.end(err ? 'Not found' : data);
  });
 } catch { res.writeHead(400); res.end('Bad request'); }
}).listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173/site_lucas_mifarreg/'));
