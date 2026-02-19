export const ArtworkCard = ({ id, title, artist, image, date, medium, department, culture }) => {
    const cardStyle = {
        maxWidth: '480px',
        margin: '24px auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(145deg, #1e1e2e, #2a2a3d)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const imageContainerStyle = {
        width: '100%',
        height: '320px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#111',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        transition: 'transform 0.4s ease',
    };

    const noImageStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '1rem',
        fontStyle: 'italic',
    };

    const bodyStyle = {
        padding: '20px 24px',
    };

    const titleStyle = {
        fontSize: '1.3rem',
        fontWeight: '700',
        color: '#f0e6d3',
        marginBottom: '6px',
        lineHeight: '1.3',
        fontFamily: "'Georgia', serif",
    };

    const artistStyle = {
        fontSize: '1rem',
        color: '#c9a96e',
        marginBottom: '16px',
        fontWeight: '500',
    };

    const detailsContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    };

    const tagStyle = (color) => ({
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '0.78rem',
        fontWeight: '500',
        backgroundColor: `${color}18`,
        color: color,
        border: `1px solid ${color}30`,
    });

    const idBadgeStyle = {
        position: 'absolute',
        top: '12px',
        right: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#c9a96e',
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: '600',
        backdropFilter: 'blur(8px)',
    };

    return (
        <article style={cardStyle}>
            {/* Image Section */}
            <div style={imageContainerStyle}>
                {image ? (
                    <img
                        src={image}
                        alt={title || 'Artwork'}
                        style={imageStyle}
                        loading="lazy"
                    />
                ) : (
                    <div style={noImageStyle}>No image available</div>
                )}
                <span style={idBadgeStyle}>#{id}</span>
            </div>

            {/* Content Section */}
            <div style={bodyStyle}>
                <h2 style={titleStyle}>{title || 'Untitled'}</h2>
                {artist && <p style={artistStyle}>{artist}</p>}

                {/* Detail Tags */}
                <div style={detailsContainerStyle}>
                    {date && (
                        <span style={tagStyle('#8b9cf7')}>
                            📅 {date}
                        </span>
                    )}
                    {medium && (
                        <span style={tagStyle('#7ecba1')}>
                            🎨 {medium.length > 40 ? medium.substring(0, 40) + '…' : medium}
                        </span>
                    )}
                    {department && (
                        <span style={tagStyle('#e8a87c')}>
                            🏛️ {department}
                        </span>
                    )}
                    {culture && (
                        <span style={tagStyle('#d4a5e5')}>
                            🌍 {culture}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
};
