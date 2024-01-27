import styles from '@/app/styles/table.module.css'

export default function MyFile() {
    return (
        <table className={styles.dataTable}>
        <thead>
            <tr>
            <th><input type="checkbox" id="selectAll" /></th>
            <th>Filename</th>
            <th>Uploaded By</th>
            <th>Uploaded Date</th>
            <th>Modified Date</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><input type="checkbox" className="rowCheckbox" /></td>
            <td>Document1.csv</td>
            <td>User123</td>
            <td>2024-01-25</td>
            <td>2024-01-26</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
            </tr>
            <tr>
            <td><input type="checkbox" className="rowCheckbox" /></td>
            <td>Document2.csv</td>
            <td>User456</td>
            <td>2024-01-24</td>
            <td>2024-01-25</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
            </tr>
        </tbody>
        </table>

    );
  }