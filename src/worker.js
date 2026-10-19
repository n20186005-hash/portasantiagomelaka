export default {
  /** @param {Request} request
   * @param {{ ASSETS: { fetch: (request: Request) => Promise<Response> } }} env
   */
  async fetch(request, env) {
  const url = new URL(request.url);
  if (url.protocol !== 'https:' || url.hostname === 'www.portasantiagomelaka.com') {
    url.protocol = 'https:';
    if (url.hostname === 'www.portasantiagomelaka.com') url.hostname = 'portasantiagomelaka.com';
    return Response.redirect(url.href, 301);
  }
  return env.ASSETS.fetch(request);
}};
