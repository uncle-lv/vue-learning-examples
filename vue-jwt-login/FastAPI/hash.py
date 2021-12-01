from loguru import logger

import security


logger.info('{}'.format(security.pwd_context.hash('test')))
