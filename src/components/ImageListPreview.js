import { ImageList, ImageListItem } from "@mui/material";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const ImageListItemStyle = {
  cursor: "zoom-in",
};

const cols = {
  葉書碩: 1,
  李建霖: 1,
  林玟伶: 2,
  石瑛: 1,
  徐振瑜: 2,
  許哲睿: 3,
  林繼堽: 1,
};

const ImageListPreview = ({ name, count }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = new Array(count)
    .fill(0)
    .map((_, index) => `/images/works/${name}/${index}.jpg`);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <ImageList
      sx={{ width: "100%" }}
      variant="quilted"
      cols={cols[name]}
      gap={8}
    >
      {new Array(count).fill(0).map((_, index) => (
        <ImageListItem
          style={ImageListItemStyle}
          key={`${name}-work-${index}`}
          onClick={() => openImageViewer(index)}
        >
          <img
            src={`/images/works/${name}/${index}.jpg?w=161&fit=crop&auto=format`}
            srcSet={`/images/works/${name}/${index}.jpg?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={`${name}-work-${index}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "--var(primary-bg) !important",
          }}
          closeOnClickOutside={true}
        />
      )}
    </ImageList>
  );
};

export default ImageListPreview;
