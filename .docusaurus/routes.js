import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'be3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3f6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5d0'),
            routes: [
              {
                path: '/docs/category/haladó-témák',
                component: ComponentCreator('/docs/category/haladó-témák', '3ae'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/advanced-topics/api-integration',
                component: ComponentCreator('/docs/guides/advanced-topics/api-integration', 'f21'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/advanced-topics/command-line-interface',
                component: ComponentCreator('/docs/guides/advanced-topics/command-line-interface', '9f2'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/configuration-tips',
                component: ComponentCreator('/docs/guides/configuration-tips', '701'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/deployment-guide',
                component: ComponentCreator('/docs/guides/deployment-guide', '107'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/installation-guide',
                component: ComponentCreator('/docs/guides/installation-guide', 'e2f'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/tutorials/congratulations',
                component: ComponentCreator('/docs/tutorials/congratulations', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/create-a-blog-post',
                component: ComponentCreator('/docs/tutorials/create-a-blog-post', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/create-a-document',
                component: ComponentCreator('/docs/tutorials/create-a-document', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/create-a-page',
                component: ComponentCreator('/docs/tutorials/create-a-page', 'ed7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/deploy-your-site',
                component: ComponentCreator('/docs/tutorials/deploy-your-site', 'd99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro',
                component: ComponentCreator('/docs/tutorials/intro', 'e5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/manage-docs-versions',
                component: ComponentCreator('/docs/tutorials/manage-docs-versions', '016'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/markdown-features',
                component: ComponentCreator('/docs/tutorials/markdown-features', '5a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/test',
                component: ComponentCreator('/docs/tutorials/test', 'ffc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/translate-your-site',
                component: ComponentCreator('/docs/tutorials/translate-your-site', '081'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
