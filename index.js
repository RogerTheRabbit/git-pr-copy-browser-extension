const matches_allowed = (url) => {
  const patterns = [
    /https:\/\/github.com.*/,
    /https:\/\/git\..*\.com.*/,
    /https:\/\/github\..*\.com.*/,
  ];
  return patterns.find((pattern) => pattern.test(url));
};

if (matches_allowed(window.location.href)) {
  // Run code
}
