export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619586cb22e9ab22cefaf023',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-x5m34ba8',
                  apiId: 'bc8b67ad-ef72-4738-a603-e5214dc501d1'
                },
                {
                  buildHookId: '619586cbe6e1e8201c7f2453',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6deaxjmc',
                  apiId: 'b1c007fa-8eff-4a3b-afdf-3a42b4658617'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oscar-leung/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6deaxjmc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
