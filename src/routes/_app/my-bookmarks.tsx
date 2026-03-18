import { createFileRoute } from "@tanstack/react-router";
import { MyBookmarksPage } from "../../pages/bookmark/MyBookmarksPage";

export const Route = createFileRoute("/_app/my-bookmarks")({
  component: MyBookmarksPage,
});
