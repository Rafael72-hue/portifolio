export interface ProjectDataProps {
    id: string;
    poster: string;
    posterText: string;
    projectName: string;
    description: string;
    screenshots: [ScreenshotProps]
};

export interface ScreenshotProps {
    id: number;
    imageUrl: string;
    alternativeText: string
}