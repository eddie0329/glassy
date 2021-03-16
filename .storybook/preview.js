export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
export const decorators = [
  () => {
    return {
      template: `
      <div style="background: linear-gradient(90deg,#FFFF00 6%,#FFA500 25%,#F14444 45%,#D53567 55%,#9A109A 94%); height: 100vh; padding: 20px; box-sz">
        <div style="background: rgba(255, 255, 255, 0.4); border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); padding: 20px; height: 100%; box-sizing: border-box; box-shadow: 0 0 100000px 100000px rgba(rgb(255,255,255), 0.2) inset;">
          <story />
        </div>
      </div>
      `,
    };
  },
];
