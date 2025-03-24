function restoreIpAddresses(s: string): string[] {
    if (!s.length) return [];

    const result = [];

    const isValidIpSection = (section: string): boolean => {
        const isProperLength = section.length <= 3;
        // Zero itself is ok, but starting with 0 with other nums is not
        const doesNotStartWithZero = !(section[0] === "0" && section.length > 1);
        const isWithinRange = Number(section) <= 255;
        return isProperLength && doesNotStartWithZero && isWithinRange;
    }

    const isValidIpAddress = (path: string): boolean => {
        const required_dot_count = 3;
        const validIpAddressLength = s.length + required_dot_count;
        return path.length === validIpAddressLength;
    }

    const dfs = (start = 0, path = "", section_no = 0, dot_count = 0): void => {
        // console.log("path", path, "\nstart", start, "\nsection_no", section_no, "\n==========");
        if (isValidIpAddress(path)) {
            result.push(path.substring(0, path.length));
            return;
        }

        let ip_section = "";
        const end = start + 3;

        for (let i = start; i < end; i++) {
            ip_section+= s[i];

            if (i === s.length - 1 && section_no + 1 <= 3) return;

            if (isValidIpSection(ip_section)) {
                if (section_no + 1 === 4) {
                    dfs(i + 1, path + ip_section, section_no + 1, dot_count);
                } else {
                    if (dot_count + 1 === 4) return;
                    dfs(i + 1, path + ip_section + ".", section_no + 1, dot_count + 1);
                }
            }
        }
    };

    dfs();

    return result;
};