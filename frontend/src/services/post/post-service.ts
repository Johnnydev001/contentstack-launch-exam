import Stack from "@/contentstack-sdk";
import {addEditableTags} from "@contentstack/utils";

export const getBlogPostsRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "blog_post",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    response[0].forEach((entry) => addEditableTags(entry, "blog_post", true));
    return response[0];
};