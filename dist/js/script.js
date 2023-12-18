// import { motion } from "framer-motion";

// const banner = {
//   hidden: { y: -50, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// export default function Home() {
//   return (
//     <motion.div
//       className="relative"
//       initial="hidden"
//       animate="visible"
//       variants={banner}
//       transition={{ duration: 1, type: "tween" }}
//     >
//       {/* Your banner content goes here */}
//     </motion.div>
//   );
// }

document.getElementById("to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Select Hamburger Icon
const hamburger = document.getElementById("hamburger");

// Add Click Event Listener
hamburger.addEventListener("click", () => {
  // Toggle Hamburger Icon Move
  hamburger.classList.toggle("hamburger-move");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to Top
const toTop = document.getElementById("to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
