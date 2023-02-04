const patterns = [
  /https:\/\/github.com.*/,
  /https:\/\/git\..*\.com.*/,
  /https:\/\/github\..*\.com.*/,
];
const isPullRequest = /\/pull\/\d+.*/;

const matches_allowed = (url) => {
  return patterns.find((pattern) => pattern.test(url));
};

const matches_pr = (url) => {
  return isPullRequest.test(url);
};

const getCopyIcon = (copyValue) => {
  // HTML stolen from the other copy button icon on GitHub's PR page
  return `<clipboard-copy
      aria-label="Copy"
      data-copy-feedback="Copied!"
      value="${copyValue}"
      data-view-component="true"
      class="Link--onHover js-copy-branch color-fg-muted d-inline-block ml-1"
      tabindex="0"
      role="button"
    >
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-copy"
      >
        <path
          fill-rule="evenodd"
          d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
        ></path>
        <path
          fill-rule="evenodd"
          d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
        ></path>
      </svg>
      <svg
        style="display: none"
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-check color-fg-success"
      >
        <path
          fill-rule="evenodd"
          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
        ></path>
      </svg>
    </clipboard-copy>
    `;
};

const addCopyUrl = () => {
  const title = document.getElementsByClassName("gh-header-title")[0];
  const span = document.createElement("span");
  const prName = document.getElementsByClassName(
    "js-issue-title markdown-title"
  )[0].innerText;
  span.innerHTML = getCopyIcon(`[${prName}](${window.location.href})`);
  title.appendChild(span);
};

    matches_allowed(window.location.href) &&
      matches_pr(window.location.href) &&
      addCopyUrl();
