const BASE_URL = "http://localhost:8080/api";

export async function api(path, options = {}) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

    if (!response.ok) {
        console.log("API error status:", response.status);
        console.log("API error body:", data);

        throw new Error(
            typeof data === "string"
                ? data
                : data?.message || JSON.stringify(data) || `Request failed with status ${response.status}`
        );
    }

    return data;
}