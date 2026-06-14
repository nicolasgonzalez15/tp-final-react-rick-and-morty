export const navigate = (path:string) => {
  window.history.pushState({}, "", path);

  const navigationEvent = new Event("pushstate");
  window.dispatchEvent(navigationEvent);
}

