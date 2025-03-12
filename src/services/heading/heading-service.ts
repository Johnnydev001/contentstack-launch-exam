import Stack from "@/contentstack-sdk";
import {addEditableTags, EntryModel} from "@contentstack/utils";

export const getHeadingRes =  async ({entryUrl = ''}: {entryUrl: string}) => {
    const response = await Stack.getEntryByUrl({
        contentTypeUid: "headings",
        referenceFieldPath: undefined,
        entryUrl,
        jsonRtePath: undefined,
    });
    return response[0];
};
