import Stack from "@/contentstack-sdk";

export const getNavigationRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "header",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    })
    return response[0]
}