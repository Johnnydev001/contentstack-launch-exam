import Stack from "@/contentstack-sdk";
import {addEditableTags, EntryModel} from "@contentstack/utils";

export const getBlogPostsRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "blog_post",
        referenceFieldPath: ["author"],
        jsonRtePath: undefined,
    });
    response[0].forEach((entry: EntryModel) => addEditableTags(entry, "blog_post", true));
    return response[0];
};

export const getBlogPostByUidRes = async ({entryUrl = ''}: {entryUrl: string}) => {
    const response = await Stack.getEntryByUrl({
        contentTypeUid: "blog_post",
        entryUrl,
        referenceFieldPath: ["author"],
        jsonRtePath: undefined,
    });
    return response[0];
};