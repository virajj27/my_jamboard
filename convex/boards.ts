import { v } from "convex/values";

import { query } from "./_generated/server";

export const get = query({
  args: {
    orgId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }
    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
      .order("desc")
      .collect();

    const boardsWithFavoriteRelation = boards.map((board) => {
      return ctx.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) =>
          q.eq("userId", identity.subject).eq("boardId", board._id)
        )
        .unique()
        .then((favorite) => {
          //favorite is basically the document==>if exists favorite=document if not favorite=null
          return {
            ...board,
            isFavorite: !!favorite,
          };
        });
    });
    const boardsWIthFavoriteBoolean = Promise.all(boardsWithFavoriteRelation);
    //because using map on boards will return array of promises(each db call will not be executed at single time)
    //what promise.all will do is wait for entire promise array to resolve and then return the result
    return boardsWIthFavoriteBoolean;
  },
});
