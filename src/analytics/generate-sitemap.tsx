import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const pages = await globby([
        'src/pages/**/*{.js,.mdx}',
        '!src/pages/_*.js',
        '!src/pages/api',
    ]);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
            .map((page) => {
                const path = page
                    .replace('pages', '')
                    .replace('.js', '')
                    .replace('.mdx', '');
                const route = path === '/index' ? '' : path;
                return `
            <url>
                <loc>${`https://livingwayethiopia.com${route}`}</loc>
            </url>
        `;
            })
            .join('')}
        </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html',
    });

    // eslint-disable-next-line no-sync
    fs.writeFileSync('public/sitemap.xml', formatted);
})();
