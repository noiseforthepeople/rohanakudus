const intersectionObserver = new IntersectionObserver((entries) => {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  if (entries[0].intersectionRatio <= 0) return;
  console.log("Loaded new items");
});

// start observing
intersectionObserver.observe(document.querySelector(".i-001"));
