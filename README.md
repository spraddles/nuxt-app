# Readme

The problem:  
- Single Page Applications (SPA's) aren’t designed up for SEO
- Vue JS is an SPA (single JavaScript file that populates a blank 'index.html' file)
- Webcrawlers can't crawl SPA's because they have no initial content
- 



* ref: https://medium.com/vue-mastery/best-practices-for-nuxt-js-seo-32399c49b2e5



Steps:  
1. create project ('npm init nuxt-app nuxt-app')  
2. create pages (home, about, news)  
3. create component (navbar)  
4. add custom global header  
5. add local custom header  



```bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build

# start server (non-static)
$ npm run start

# generate static project
# creates 'dist' folder with HTML / JS / CSS files
$ npm run generate
```


Note:
The redirect module will not work in combination with nuxt generate. Redirects are realized through a server middleware, which can only react when there is a server running.