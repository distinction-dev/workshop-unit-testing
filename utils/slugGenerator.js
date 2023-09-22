function generateSlug(title) {
if (typeof title !== 'string') {
	throw new Error('Title must be a string');
}

// Remove special characters and spaces, convert to lowercase, and replace spaces with dashes.
return title
	.replace(/[^\w\s-]/g, '')
	.toLowerCase()
	.replace(/\s+/g, '-');
}

module.exports = { generateSlug };