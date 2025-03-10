import Stack from "@/contentstack-sdk";

export const getFooterRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "footer",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    })
    return response[0]
}