type ImageModule = {
    default: string;
};

const imageModules: Record<string, ImageModule> = import.meta.glob(
    '/src/assets/images/*.{png,jpg,jpeg,svg,webp,gif}',
    {
        eager: true,
        import: 'default',
    }
);

export const imageAssets = Object.fromEntries(
    Object.entries(imageModules).map(([path, module]) => {
        const fileName = path.split('/').pop()?.split('.')[0] || '';
        return [fileName, module];
    })
);

export const imageArray = Object.values(imageAssets)