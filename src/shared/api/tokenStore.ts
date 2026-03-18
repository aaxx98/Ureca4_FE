const KEY = "accessToken"

const isBrowser = typeof window !== "undefined"

export const getAccessToken = () => isBrowser ? localStorage.getItem(KEY) : null

export const setAccessToken = (token: string | null) => {
	if (!isBrowser) return
	if (token === null) {
		localStorage.removeItem(KEY)
	} else {
		localStorage.setItem(KEY, token)
	}
}

export const clearAllStorage = () => {
	if (!isBrowser) return
	localStorage.clear()
}
