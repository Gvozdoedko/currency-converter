module.exports = {
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    
    moduleFileExtensions: ["js", "jsx"],
    
    transform: {
      "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    },
    
    testPathIgnorePatterns: ["/node_modules/", "/public/"],
    
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
  };
  