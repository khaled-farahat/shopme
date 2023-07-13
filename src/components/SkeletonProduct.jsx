import { Skeleton } from "@mui/material";


const SkeletonProduct = () => {
  return (
    <div
      style={{
        flexBasis: "30%",
        marginBottom: "5rem",
      }}
    >
      <Skeleton
        variant="rounded"
        sx={{
          width: "100%",
          height: "300px",
        }}
        animation="wave"
      />
      <Skeleton
        variant="text"
        sx={{
          width: "30%",
          marginTop: "1.5rem",
          marginBottom: "1rem",
        }}
        animation="wave"
      />
      <Skeleton
        variant="text"
        sx={{
          width: "20%",
        }}
        animation="wave"
      />
    </div>
  );
};

export default SkeletonProduct;
