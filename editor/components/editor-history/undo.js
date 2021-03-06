/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/element';

function EditorHistoryUndo( { hasUndo, undo } ) {
	return (
		<IconButton
			icon="undo"
			label={ __( 'Undo' ) }
			disabled={ ! hasUndo }
			onClick={ undo }
			className="editor-history__undo"
		/>
	);
}

export default compose( [
	withSelect( ( select ) => ( {
		hasUndo: select( 'core/editor' ).hasEditorUndo(),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		undo: () => dispatch( 'core/editor' ).undo(),
	} ) ),
] )( EditorHistoryUndo );
