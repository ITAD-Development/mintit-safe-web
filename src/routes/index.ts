import { isIOS } from "react-device-detect";
import { createBrowserRouter, redirect } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      return import("./home").then((mod) => {
        return {
          Component: mod.Home,
        };
      });
    },
  },
  {
    path: "/guide",
    async lazy() {
      return import("./guide").then((mod) => {
        return {
          Component: mod.Guide,
        };
      });
    },
  },
  {
    path: "/download",
    loader({ request }) {
      console.log(request.url.replace(/\//g, "").endsWith("download"));
      if (request.url.replace(/\//g, "").endsWith("download")) {
        if (isIOS) {
          return redirect("/download/ios");
        } else {
          return redirect("/download/aos");
        }
      }

      return true;
    },
    async lazy() {
      const { Download } = await import("./download");
      return {
        Component: Download,
      };
    },
    children: [
      {
        path: "ios",
        async lazy() {
          const { Ios } = await import("./download/ios");
          return {
            Component: Ios,
          };
        },
        loader({ request }) {
          if (request.url.endsWith("download/ios")) {
            return redirect("/download/ios/installation");
          }

          return true;
        },
        children: [
          {
            path: "installation",
            async lazy() {
              const { Installation } = await import("./download/installation");
              return {
                Component: Installation,
              };
            },
          },
          {
            path: "caution",
            async lazy() {
              return import("./download/caution").then((mod) => {
                return {
                  Component: mod.Caution,
                };
              });
            },
          },
        ],
      },
      {
        path: "aos",
        async lazy() {
          return import("./download/aos").then((mod) => {
            return {
              Component: mod.Aos,
            };
          });
        },
      },
    ],
  },
  {
    path: "/agreement/marketing",
    async lazy() {
      return import("./home").then((mod) => {
        return {
          Component: mod.Home,
        };
      });
    },
  },
  {
    path: "/histories",
    async lazy() {
      return import("./histories").then((mod) => {
        return {
          Component: mod.Histories,
        };
      });
    },
  },
  {
    path: "/success",
    async lazy() {
      return import("./success").then((mod) => {
        return {
          Component: mod.Success,
        };
      });
    },
  },
  {
    path: "/auth",
    async lazy() {
      return import("./auth").then((mod) => {
        return {
          Component: mod.Auth,
        };
      });
    },
  },
  {
    path: "/failure",
    async lazy() {
      return import("./failure").then((mod) => {
        return {
          Component: mod.Failure,
        };
      });
    },
  },
]);

export default router;
