// vite.config.mjs
import adminXViteConfig from "file:///home/ghost/apps/admin-x-framework/dist/vite.js";

// package.json
var package_default = {
  name: "@tryghost/posts",
  version: "0.0.0",
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/TryGhost/Ghost/tree/main/apps/posts"
  },
  author: "Ghost Foundation",
  files: [
    "LICENSE",
    "README.md",
    "dist/"
  ],
  main: "./dist/posts.umd.cjs",
  module: "./dist/posts.js",
  private: true,
  scripts: {
    dev: "vite build --watch",
    "dev:start": "vite",
    build: "tsc && vite build",
    "test:unit": "vitest run test/unit",
    lint: "yarn run lint:code && yarn run lint:test",
    "lint:code": "eslint --ext .js,.ts,.cjs,.tsx --cache src",
    "lint:test": "eslint -c test/.eslintrc.cjs --ext .js,.ts,.cjs,.tsx --cache test",
    preview: "vite preview"
  },
  devDependencies: {
    "@testing-library/react": "14.3.1",
    "@types/react": "18.3.20",
    "@types/react-dom": "18.3.7",
    msw: "2.8.2",
    vite: "4.5.14",
    vitest: "3.1.3"
  },
  nx: {
    targets: {
      dev: {
        dependsOn: [
          "^build"
        ]
      },
      "test:unit": {
        dependsOn: [
          "^build"
        ]
      },
      "test:acceptance": {
        dependsOn: [
          "^build"
        ]
      }
    }
  },
  dependencies: {
    "@tinybirdco/charts": "0.2.4",
    "@tryghost/admin-x-framework": "0.0.0",
    "@tryghost/shade": "0.0.0",
    react: "18.3.1",
    "react-dom": "18.3.1"
  }
};

// vite.config.mjs
import { resolve } from "path";
var __vite_injected_original_dirname = "/home/ghost/apps/posts";
var vite_config_default = function viteConfig() {
  return adminXViteConfig({
    packageName: package_default.name,
    entry: resolve(__vite_injected_original_dirname, "src/index.tsx"),
    overrides: {
      test: {
        include: [
          "./test/unit/**/*",
          "./src/**/*.test.ts"
        ]
      },
      resolve: {
        alias: {
          "@src": resolve(__vite_injected_original_dirname, "./src"),
          "@assets": resolve(__vite_injected_original_dirname, "./src/assets"),
          "@components": resolve(__vite_injected_original_dirname, "./src/components"),
          "@hooks": resolve(__vite_injected_original_dirname, "./src/hooks"),
          "@utils": resolve(__vite_injected_original_dirname, "./src/utils"),
          "@views": resolve(__vite_injected_original_dirname, "./src/views")
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2dob3N0L2FwcHMvcG9zdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2dob3N0L2FwcHMvcG9zdHMvdml0ZS5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2dob3N0L2FwcHMvcG9zdHMvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IGFkbWluWFZpdGVDb25maWcgZnJvbSAnQHRyeWdob3N0L2FkbWluLXgtZnJhbWV3b3JrL3ZpdGUnO1xuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gdml0ZUNvbmZpZygpIHtcbiAgICByZXR1cm4gYWRtaW5YVml0ZUNvbmZpZyh7XG4gICAgICAgIHBhY2thZ2VOYW1lOiBwa2cubmFtZSxcbiAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzeCcpLFxuICAgICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHRlc3Q6IHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbXG4gICAgICAgICAgICAgICAgICAgICcuL3Rlc3QvdW5pdC8qKi8qJyxcbiAgICAgICAgICAgICAgICAgICAgJy4vc3JjLyoqLyoudGVzdC50cydcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgICAgICdAc3JjJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgICAgICAgICAgICAgICAnQGFzc2V0cyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXG4gICAgICAgICAgICAgICAgICAgICdAY29tcG9uZW50cyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxuICAgICAgICAgICAgICAgICAgICAnQGhvb2tzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9ob29rcycpLFxuICAgICAgICAgICAgICAgICAgICAnQHV0aWxzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy91dGlscycpLFxuICAgICAgICAgICAgICAgICAgICAnQHZpZXdzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy92aWV3cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsICJ7XG4gICAgXCJuYW1lXCI6IFwiQHRyeWdob3N0L3Bvc3RzXCIsXG4gICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjBcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vVHJ5R2hvc3QvR2hvc3QvdHJlZS9tYWluL2FwcHMvcG9zdHNcIlxuICAgIH0sXG4gICAgXCJhdXRob3JcIjogXCJHaG9zdCBGb3VuZGF0aW9uXCIsXG4gICAgXCJmaWxlc1wiOiBbXG4gICAgICAgIFwiTElDRU5TRVwiLFxuICAgICAgICBcIlJFQURNRS5tZFwiLFxuICAgICAgICBcImRpc3QvXCJcbiAgICBdLFxuICAgIFwibWFpblwiOiBcIi4vZGlzdC9wb3N0cy51bWQuY2pzXCIsXG4gICAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvcG9zdHMuanNcIixcbiAgICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICBcImRldlwiOiBcInZpdGUgYnVpbGQgLS13YXRjaFwiLFxuICAgICAgICBcImRldjpzdGFydFwiOiBcInZpdGVcIixcbiAgICAgICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgICAgIFwidGVzdDp1bml0XCI6IFwidml0ZXN0IHJ1biB0ZXN0L3VuaXRcIixcbiAgICAgICAgXCJsaW50XCI6IFwieWFybiBydW4gbGludDpjb2RlICYmIHlhcm4gcnVuIGxpbnQ6dGVzdFwiLFxuICAgICAgICBcImxpbnQ6Y29kZVwiOiBcImVzbGludCAtLWV4dCAuanMsLnRzLC5janMsLnRzeCAtLWNhY2hlIHNyY1wiLFxuICAgICAgICBcImxpbnQ6dGVzdFwiOiBcImVzbGludCAtYyB0ZXN0Ly5lc2xpbnRyYy5janMgLS1leHQgLmpzLC50cywuY2pzLC50c3ggLS1jYWNoZSB0ZXN0XCIsXG4gICAgICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiXG4gICAgfSxcbiAgICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIjE0LjMuMVwiLFxuICAgICAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIjE4LjMuMjBcIixcbiAgICAgICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiMTguMy43XCIsXG4gICAgICAgIFwibXN3XCI6IFwiMi44LjJcIixcbiAgICAgICAgXCJ2aXRlXCI6IFwiNC41LjE0XCIsXG4gICAgICAgIFwidml0ZXN0XCI6IFwiMy4xLjNcIlxuICAgIH0sXG4gICAgXCJueFwiOiB7XG4gICAgICAgIFwidGFyZ2V0c1wiOiB7XG4gICAgICAgICAgICBcImRldlwiOiB7XG4gICAgICAgICAgICAgICAgXCJkZXBlbmRzT25cIjogW1xuICAgICAgICAgICAgICAgICAgICBcIl5idWlsZFwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGVzdDp1bml0XCI6IHtcbiAgICAgICAgICAgICAgICBcImRlcGVuZHNPblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiXmJ1aWxkXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0ZXN0OmFjY2VwdGFuY2VcIjoge1xuICAgICAgICAgICAgICAgIFwiZGVwZW5kc09uXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJeYnVpbGRcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkB0aW55YmlyZGNvL2NoYXJ0c1wiOiBcIjAuMi40XCIsXG4gICAgICAgIFwiQHRyeWdob3N0L2FkbWluLXgtZnJhbWV3b3JrXCI6IFwiMC4wLjBcIixcbiAgICAgICAgXCJAdHJ5Z2hvc3Qvc2hhZGVcIjogXCIwLjAuMFwiLFxuICAgICAgICBcInJlYWN0XCI6IFwiMTguMy4xXCIsXG4gICAgICAgIFwicmVhY3QtZG9tXCI6IFwiMTguMy4xXCJcbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNQLE9BQU8sc0JBQXNCOzs7QUNBblI7QUFBQSxFQUNJLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLFlBQWM7QUFBQSxJQUNWLE1BQVE7QUFBQSxJQUNSLEtBQU87QUFBQSxFQUNYO0FBQUEsRUFDQSxRQUFVO0FBQUEsRUFDVixPQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLElBQ1AsS0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsT0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsTUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsU0FBVztBQUFBLEVBQ2Y7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2YsMEJBQTBCO0FBQUEsSUFDMUIsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEIsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsUUFBVTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLElBQU07QUFBQSxJQUNGLFNBQVc7QUFBQSxNQUNQLEtBQU87QUFBQSxRQUNILFdBQWE7QUFBQSxVQUNUO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxNQUNBLGFBQWE7QUFBQSxRQUNULFdBQWE7QUFBQSxVQUNUO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxNQUNBLG1CQUFtQjtBQUFBLFFBQ2YsV0FBYTtBQUFBLFVBQ1Q7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ1osc0JBQXNCO0FBQUEsSUFDdEIsK0JBQStCO0FBQUEsSUFDL0IsbUJBQW1CO0FBQUEsSUFDbkIsT0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2pCO0FBQ0o7OztBRDNEQSxTQUFRLGVBQWM7QUFGdEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUyxTQUFTLGFBQWE7QUFDbEMsU0FBTyxpQkFBaUI7QUFBQSxJQUNwQixhQUFhLGdCQUFJO0FBQUEsSUFDakIsT0FBTyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxJQUN6QyxXQUFXO0FBQUEsTUFDUCxNQUFNO0FBQUEsUUFDRixTQUFTO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsT0FBTztBQUFBLFVBQ0gsUUFBUSxRQUFRLGtDQUFXLE9BQU87QUFBQSxVQUNsQyxXQUFXLFFBQVEsa0NBQVcsY0FBYztBQUFBLFVBQzVDLGVBQWUsUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxVQUNwRCxVQUFVLFFBQVEsa0NBQVcsYUFBYTtBQUFBLFVBQzFDLFVBQVUsUUFBUSxrQ0FBVyxhQUFhO0FBQUEsVUFDMUMsVUFBVSxRQUFRLGtDQUFXLGFBQWE7QUFBQSxRQUM5QztBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSixDQUFDO0FBQ0w7IiwKICAibmFtZXMiOiBbXQp9Cg==
