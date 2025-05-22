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
    component: ComponentCreator('/docs', 'a63'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '348'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4b0'),
            routes: [
              {
                path: '/docs/category/haladó-témák',
                component: ComponentCreator('/docs/category/haladó-témák', '3ae'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/advanced-topics/api-integration',
                component: ComponentCreator('/docs/guides/advanced-topics/api-integration', '2d6'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/advanced-topics/command-line-interface',
                component: ComponentCreator('/docs/guides/advanced-topics/command-line-interface', 'de5'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/configuration-tips',
                component: ComponentCreator('/docs/guides/configuration-tips', '818'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/deployment-guide',
                component: ComponentCreator('/docs/guides/deployment-guide', '259'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/installation-guide',
                component: ComponentCreator('/docs/guides/installation-guide', '80e'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/petstore/add-pet',
                component: ComponentCreator('/docs/petstore/add-pet', '94f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/create-user',
                component: ComponentCreator('/docs/petstore/create-user', 'e3b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/create-users-with-list-input',
                component: ComponentCreator('/docs/petstore/create-users-with-list-input', '23f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/delete-order',
                component: ComponentCreator('/docs/petstore/delete-order', '6f6'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/delete-pet',
                component: ComponentCreator('/docs/petstore/delete-pet', 'e5b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/delete-user',
                component: ComponentCreator('/docs/petstore/delete-user', 'c5f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/find-pets-by-status',
                component: ComponentCreator('/docs/petstore/find-pets-by-status', 'f55'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/find-pets-by-tags',
                component: ComponentCreator('/docs/petstore/find-pets-by-tags', 'c80'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/get-inventory',
                component: ComponentCreator('/docs/petstore/get-inventory', '7d9'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/get-order-by-id',
                component: ComponentCreator('/docs/petstore/get-order-by-id', '7b0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/get-pet-by-id',
                component: ComponentCreator('/docs/petstore/get-pet-by-id', 'e44'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/get-user-by-name',
                component: ComponentCreator('/docs/petstore/get-user-by-name', '0d4'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/login-user',
                component: ComponentCreator('/docs/petstore/login-user', 'f0b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/logout-user',
                component: ComponentCreator('/docs/petstore/logout-user', '0a2'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/place-order',
                component: ComponentCreator('/docs/petstore/place-order', 'b5f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/swagger-petstore-openapi-3-0',
                component: ComponentCreator('/docs/petstore/swagger-petstore-openapi-3-0', 'bbc'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/update-pet',
                component: ComponentCreator('/docs/petstore/update-pet', '1af'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/update-pet-with-form',
                component: ComponentCreator('/docs/petstore/update-pet-with-form', 'fd0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/update-user',
                component: ComponentCreator('/docs/petstore/update-user', '607'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/petstore/upload-file',
                component: ComponentCreator('/docs/petstore/upload-file', '2ff'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/tutorials/congratulations',
                component: ComponentCreator('/docs/tutorials/congratulations', '977'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/create-a-blog-post',
                component: ComponentCreator('/docs/tutorials/create-a-blog-post', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/create-a-document',
                component: ComponentCreator('/docs/tutorials/create-a-document', 'b39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/create-a-page',
                component: ComponentCreator('/docs/tutorials/create-a-page', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/deploy-your-site',
                component: ComponentCreator('/docs/tutorials/deploy-your-site', 'dc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro',
                component: ComponentCreator('/docs/tutorials/intro', 'c16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/manage-docs-versions',
                component: ComponentCreator('/docs/tutorials/manage-docs-versions', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/markdown-features',
                component: ComponentCreator('/docs/tutorials/markdown-features', '305'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/test',
                component: ComponentCreator('/docs/tutorials/test', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/translate-your-site',
                component: ComponentCreator('/docs/tutorials/translate-your-site', 'f54'),
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
