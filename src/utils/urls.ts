const urls = {
  pages: {
    index: "/",
    groupdId: (groupId: string) => `/group/${groupId}`,
    groupTab: (groupId: string, tabId: string) =>
      `/group/${groupId}?tabId=${tabId}`,
  },
  api: {
    register: "/auth/register",
    login: "/auth/login",
    me: "/auth/me",

    group: "/group",
    groupId: (groupId: string) => `/group/${groupId}`,
    groupMembers: (groupdId: string) => `/group/${groupdId}/members`,
    groupMemberId: (groupdId: string, memberId: string) =>
      `/group/${groupdId}/members/${memberId}`,
    groupTab: (groupId: string) => `/group/${groupId}/tab`,
    groupRatings: (groupId: string) => `/group/${groupId}/ratings`,
    groupLabels: (groupId: string) => `/group/${groupId}/labels`,

    tabIdea: (tabId: string) => `/group/any/tab/${tabId}/idea`,
    subideas: (groupId: string) => `/subideas?groupId=${groupId}`,

    ideaRating: (ideaId: string) => `/idea/${ideaId}/rating`,
    subideaRatings: (parentId: string) => `/ratings?parentId=${parentId}`,

    labelId: (labelId: string) => `/labels/${labelId}`,

    userSearch: (query: string) => `/user/search?q=${query}`,
  },
};

export default urls;
