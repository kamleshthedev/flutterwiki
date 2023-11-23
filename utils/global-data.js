export const getGlobalData = () => {
  // const name = process.env.BLOG_NAME
  //   ? decodeURI(process.env.BLOG_NAME)
  //   : 'FlutterWiki';
  // const blogTitle = process.env.BLOG_TITLE
  //   ? decodeURI(process.env.BLOG_TITLE)
  //   : 'Dive Deep into Flutter: Unraveling the Framework on FlutterWiki';
  // const footerText = process.env.BLOG_FOOTER_TEXT
  //   ? decodeURI(process.env.BLOG_FOOTER_TEXT)
  //   : 'Coming Soon';

  const name = 'FlutterWiki';
  const blogTitle =
    'Dive Deep into Flutter: Unraveling the Framework on FlutterWiki';
  const footerText = 'Coming Soon';

  return {
    name,
    blogTitle,
    footerText,
  };
};
