export const getManualBookmarksKey = () => [`/bookmarks/manuals`] as const;

export const getManualBookmarkDetailKey = (manualId?: number) =>
	[`/bookmarks/manuals/${manualId}/detail`] as const;

export const getConsultationBookmarksKey = () => [`/bookmarks/consultations`] as const;

export const getConsultationBookmarkDetailKey = (consultId?: number) =>
	[`/bookmarks/consultations/${consultId}/detail`] as const;
