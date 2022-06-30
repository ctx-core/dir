export async function chdir(dir, fn) {
	const cwd = process.cwd()
  try {
		process.chdir(dir)
		await fn()
	} finally {
		process.chdir(cwd)
	}
}
