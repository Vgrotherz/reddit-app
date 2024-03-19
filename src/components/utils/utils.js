export const decodeHtml= (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export const renderImagesText = (text) => {
    const imageRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(https?:\/\/preview\.redd\.it\/[a-zA-Z0-9]+\.(?:png|jpg|jpeg|gif|webp)\?width=\d+&format=pjpg&auto=webp&s=[a-zA-Z0-9]+)\1.*?<\/a>/g;
    const parts = text.split(imageRegex);

    const elements = [];
    parts.forEach((part, index) => {
        if (part.startsWith('https')) {
            elements.push(
                <div key={index}>
                    <img src={part} alt="Reddit Img" />
                </div>
            );
        } else if (part.trim() !== '') {
            elements.push(
                <div key={index} dangerouslySetInnerHTML={{ __html: part }}></div>
            );
        }
    });

    return elements;
};

export const renderImagesOnly = (text) => {
    const imageRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(https?:\/\/preview\.redd\.it\/[a-zA-Z0-9]+\.(?:png|jpg|jpeg|gif|webp)\?width=\d+&format=pjpg&auto=webp&s=[a-zA-Z0-9]+)\1.*?<\/a>/g;
    const parts = text.match(imageRegex) || [];

    return parts.map((part, index) => {
        const imageUrl = part.replace(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1.*?<\/a>/, '$2'); // Extract the image URL from the <a> tag
        return <img key={index} src={imageUrl} alt="Reddit Img" />;
    });
};