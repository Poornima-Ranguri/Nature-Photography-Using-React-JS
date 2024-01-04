import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetail, onClickActiveId, isActive} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = eachImageDetail
  console.log(imageUrl)
  console.log(imageAltText)

  const onClicking = () => {
    onClickActiveId(id)
  }

  const activeBtnClassName = isActive ? 'image' : 'image-blur'

  return (
    <li className="list" key={id}>
      <button
        className={`btn ${activeBtnClassName}`}
        type="button"
        onClick={onClicking}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
