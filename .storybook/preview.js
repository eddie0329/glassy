export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
export const decorators = [
  () => {
    return {
      template: `
      <div style="height: 100%; background: conic-gradient(from 180deg at 50% 50%, #EC4889 0deg, #F176B3 61.87deg, #A855F7 118.12deg, #6366F1 174.38deg, #3B82F6 232.5deg, #0EA5E9 294.38deg, #0686D4 360deg); border: 1px solid #000000; box-sizing: border-box;">
        <div style="height: inherit; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(240px); padding: 20px; box-sizing: border-box;">
          <story />
        </div>
      </div>
      `,
    };
  },
];
