import { useState } from 'react';
import { Col, Row, Ratio, Modal } from 'react-bootstrap';

interface GalleryImage {
    path: string;
    url: string;
}

interface GalleryGridProps {
    images: GalleryImage[];
    cols: number;
    baseUrl: string;
}

export default function GalleryGrid({ images, cols, baseUrl }: GalleryGridProps) {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imagePath: string) => {
        setSelectedImage(imagePath);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleExited = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Row>
                {images.map((image, i) =>
                    <Col xs={6} md={cols === 3 ? 4 : 3} key={i}>
                        <a
                            className="d-block"
                            href={image.url}
                            onClick={(e) => {
                                e.preventDefault();
                                handleImageClick(image.path);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <Ratio>
                                <img src={baseUrl + image.path} alt={`Gallery image ${i + 1}`} />
                            </Ratio>
                        </a>
                    </Col>
                )}
            </Row>

            <Modal show={showModal} onHide={handleClose} onExited={handleExited} centered size="lg">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && (
                        <img
                            src={baseUrl + selectedImage}
                            alt="Gallery image"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}
