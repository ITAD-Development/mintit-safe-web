import react from "@vitejs/plugin-react";
import path from "path";
import { CommonServerOptions, ConfigEnv, defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());

  console.log("mode", mode);
  console.log("env", env);

  const proxies = {
    "/device/api-admin": env.VITE_MAIN_API_URL,
    "/customer/api-atm": env.VITE_MAIN_API_URL,
    "/common/api-atm": env.VITE_MAIN_API_URL,
    "/customer/api-admin": env.VITE_MAIN_API_URL,
    "/common/api-admin": env.VITE_MAIN_API_URL,
    "/atm/api-admin": env.VITE_MAIN_API_URL,
    "/administrator/api-admin": env.VITE_MAIN_API_URL,
    "/partner/api-admin": env.VITE_MAIN_API_URL,
    "/branch/api-admin": env.VITE_MAIN_API_URL,
    "/file/api-admin": env.VITE_FILE_API_URL,
    "/statistics/api-admin": env.VITE_MAIN_API_URL,
  };

  const proxy = Object.entries(proxies).reduce<CommonServerOptions["proxy"]>(
    (acc, cur) => {
      if (!acc) acc = {};

      acc[cur[0]] = {
        target: cur[1],
        changeOrigin: true,
        rewrite: (path: string) => path,
      };
      return acc;
    },
    {}
  );

  return defineConfig({
    envDir: "./",
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
      }),
    ],
    server: {
      proxy: Boolean(env.VITE_USE_PROXY) !== true ? undefined : proxy,
    },
    resolve: {
      alias: [
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/components"),
        },
        {
          find: "@routes",
          replacement: path.resolve(__dirname, "src/routes"),
        },
        {
          find: "@constants",
          replacement: path.resolve(__dirname, "src/constants"),
        },
        {
          find: "@hooks",
          replacement: path.resolve(__dirname, "src/hooks"),
        },
        {
          find: "@data",
          replacement: path.resolve(__dirname, "src/data"),
        },
        {
          find: "@_generated",
          replacement: path.resolve(__dirname, "src/_generated"),
        },
        {
          find: "@assets",
          replacement: path.resolve(__dirname, "src/assets"),
        },
        {
          find: "@libs",
          replacement: path.resolve(__dirname, "src/libs"),
        },
        {
          find: "@configs",
          replacement: path.resolve(__dirname, "src/configs"),
        },
        {
          find: "@classes",
          replacement: path.resolve(__dirname, "src/classes"),
        },
      ],
    },
  });
};
