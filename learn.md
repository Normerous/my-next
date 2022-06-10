# getServerSideProps
- only runs on server-side and never runs on the browser.
- can only be exported from a page. You can’t export it from non-page files.
## when use
- need to render a page whose data must be fetched at request time ex: such as authorization headers or geo location
- When you request this page on client-side page transitions through next/link or next/router,

# getStaticPaths
- getStaticPaths must be used with getStaticProps
- cannot use it with getServerSideProps.

# getStaticProps
- The data required to render the page is available at build time ahead of a user’s request