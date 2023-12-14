import React from "react"
import ContentLoader from "react-content-loader"

const TaskSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1216}
    height={141}
    viewBox="0 0 1216 141"
    backgroundColor="#545454"
    foregroundColor="#424242"
    {...props}
  >
    <rect x="0" y="1" rx="0" ry="0" width="395" height="141" />
    <rect x="410" y="1" rx="0" ry="0" width="395" height="141" />
    <rect x="820" y="1" rx="0" ry="0" width="395" height="141" />
  </ContentLoader>
)

export default TaskSkeleton;