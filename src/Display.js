const Display = ({good}) => {
    if (good === 0) {
        return (
            <div>no reviews yet</div>
        )
    }
    return (
      <div>{good}</div>
    )
  }

  export default Display