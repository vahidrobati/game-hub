import usePlatforms from "../hooks/usePlatforms";

const platform = (id?: number) => {
    const { data: platforms} = usePlatforms();
    return platforms?.results.find(p => p.id === id);
}

export default platform;
