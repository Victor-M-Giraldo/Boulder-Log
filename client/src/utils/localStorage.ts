export function setItem(key: string, value: Record<string, unknown>): void {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getItem<T>(key: string): T | undefined {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item) as T;
    }
    return undefined;
}
