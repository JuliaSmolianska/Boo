
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navLinks = document.getElementById('nav-links');
  const menuItems = document.querySelectorAll('#nav-links a');
  const body = document.body;

  const copySwap = document.getElementById('copy-swap');

  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    body.classList.toggle('nav-active');
  });

  closeIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    body.classList.toggle('nav-active');
  });

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      navLinks.classList.remove('active');
      body.classList.remove('nav-active');
    });
  });

  copySwap.addEventListener("click", async function () {
    const swapText = document.getElementById("swap").textContent;
    await navigator.clipboard.writeText(swapText);

    alert("Copied success: " + swapText);
  });

});