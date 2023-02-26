import { import_meta_env_ } from '@ctx-core/env'
export const TMP_DIR =
	import_meta_env_().TMP_DIR
	|| `${import_meta_env_().PWD}/tmp`;
